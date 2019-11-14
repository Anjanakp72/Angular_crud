import { Action } from '@ngrx/store';
import { Groups } from '../models/groups.model';

export enum GroupActionTypes {
    LOAD_GROUP = '[GROUP] Load Groups',
    LOAD_GROUP_SUCCESS = '[GROUP] Load Groups Success',
    LOAD_GROUP_FAILURE = '[GROUP] Load Groups Failure'
}

export class LoadGroupAction implements Action {
    readonly type = GroupActionTypes.LOAD_GROUP;
}

export class LoadGroupSuccessAction implements Action {
    readonly type = GroupActionTypes.LOAD_GROUP_SUCCESS;

    constructor(public payload: Array<Groups>){}
}

export class LoadGroupsFailureAction implements Action {
    readonly type = GroupActionTypes.LOAD_GROUP_FAILURE;

    constructor(public payload: Error){}
}

export type GroupAction = LoadGroupAction | LoadGroupSuccessAction | LoadGroupsFailureAction;