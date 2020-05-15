import React, {Fragment, useState} from "react";
import {getGroupInfoFromVk, getGroupSizeFromVk} from '../admin/_api-vk.js';
import {updateGroupInfoInDB} from './_api-group.js';
import PropTypes from 'prop-types';
import SpinnerItem from "../spinner-item";
import {call, getMembersGroupFromVk, getMembersInfoFromVk} from "../admin/_api-vk";
import {createMembersToDB, updateMembersInDB} from "../member/_api-member";
import {useDispatch} from "react-redux";
import {asyncDeleteGroup, asyncUpdateGroupInfo} from "../../redux/actions/group.actions";
import store from "../../redux/store";

const GroupCard = ({item, groupsCount, refreshFunction}) => {
    const [loading, setLoading] = useState(false);
    const [actionStatus, setActionStatus] = useState('');
    const [checkCount] = useState(0);

    const dispatch = useDispatch();

    const {photo, name, group_id, size} = item;

    // const handleRemoveBtn = async (event) => {
    //     setLoading(true);
    //     const group_id = event.target.id;
    //     delGroupFromDB(group_id);
    //     refreshFunction(groupsCount - 1);
    //     setLoading(false);
    // };

    const dispatchRemoveBtn = (event) => {
        const group_id = +event.target.id;
        dispatch(asyncDeleteGroup(group_id))
    };

    const dispatchRefreshInfoBtn = (event) => {
        const group_id = +event.target.id
        dispatch(asyncUpdateGroupInfo(group_id))
    };

    const handleRefreshInfoBtn = (event) => {
        setLoading(true);
        setActionStatus('Обновление данных о группе');
        const group_id = +event.target.id;
        Promise.resolve(group_id)
            .then(getGroupInfoFromVk)
            .then(getGroupSizeFromVk)
            .then(updateGroupInfoInDB);
        setActionStatus('Обновление данных о группе закончено');
        setLoading(false);
    };

    store.subscribe(() => {
        const state = store.getState();
        console.info('state ', state);
    });

    const getAllMembers = async (group_id) => {
        setLoading(true);

        try {
            const members = await call('groups.getMembers', {group_id: group_id, v: 5.9});
            const membersSize = await members.response.count;

            let count = 0;
            await (function f() {
                console.info(`Step ${count} from ${membersSize / 1000}`);
                if (count < Math.ceil(membersSize / 1000)) {

                    const obj = {group_id: group_id, count};

                    Promise.resolve(obj)
                        .then(getMembersGroupFromVk)
                        .then((response) => {
                            return response // массив пользователей группы
                        }).then(createMembersToDB)
                        .then((response) => {
                            return response // массив пользователей группы
                        }).then(getMembersInfoFromVk)
                        .then((response) => {
                            response.map((item) => {
                                item['info'] = 'full'
                            });
                            return response // массив пользователей с информацией
                        }).then(updateMembersInDB)
                        .catch((err) => console.error(err));

                    count++;
                    setTimeout(f, 150000);
                } else {
                    console.log('All members added');
                }
            }());

        } catch (e) {
            throw new Error(e)
        }
        setLoading(false);
    };

    const handleGetMembersBtn = (event) => {
        const group_id = +event.target.id;
        getAllMembers(group_id)
    };

    const Card = () => {
        return (
            <Fragment>
                <div className='group-list__item-info'>
                    <div className='group-list__item-info-photo'>
                        <img src={photo} alt={name}/>
                    </div>
                    <div className='group-list__item-info-id'>
                        {group_id}
                    </div>

                    <div className='group-list__item-info-name'>
                        {name}
                    </div>

                    <div className='group-list__item-info-size'>
                        {size}
                    </div>
                </div>
                <div className='group-list__status'>
                    <span>Проверяем {checkCount} из {size}</span>
                    <span>Статус: {actionStatus}</span>
                </div>

                <div className='group-list__item-actions'>
                    <button
                        className='group-list__item-actions-refresh'
                        id={group_id}
                        disabled={loading}
                        aria-label='Обновить данные группы'
                        onClick={dispatchRefreshInfoBtn}
                    >
                        Обновить данные
                    </button>
                    <button
                        className='group-list__item-actions-delete'
                        id={group_id}
                        disabled={loading}
                        aria-label='Удалить группу'
                        onClick={dispatchRemoveBtn}
                    >
                        Удалить группу
                    </button>
                    <button
                        className='group-list__item-actions-load'
                        id={group_id}
                        disabled={loading}
                        aria-label='Получить пользователей группы'
                        onClick={(event) => handleGetMembersBtn(event)}
                    >
                        Получить пользователей
                    </button>
                    {actionStatus}
                </div>
            </Fragment>
        )
    };

    const Content = () => {
        return loading ? <SpinnerItem/> : <Card/>
    };

    return (
        <Content/>
    )
};

GroupCard.propTypes = {
    item: PropTypes.object.isRequired,
    // groupsCount: PropTypes.number.isRequired,
    // refreshFunction: PropTypes.func.isRequired
};

export default GroupCard;
