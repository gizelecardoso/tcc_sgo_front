import { CLICK_UPDATE_VALUE } from "./actionType";

export const clickButton = value => {
    return {
        type: CLICK_UPDATE_VALUE,
        newValue: value
    }
};