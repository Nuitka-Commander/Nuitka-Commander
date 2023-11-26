/**
 * @Description 管理加载页面状态
 * @Author: erduotong
 * @Date: 2023-11-26 10:33:25
 */
import {ref} from "vue";
import {ElLoading} from "element-plus";

/**
 * 加载页面是否开启
 * @type {ref<boolean>}
 */
export const is_loading = ref(false);

/**
 * 加载页面实例
 * @type {null}
 */


/**
 * 设置加载页面是否开启
 * @param state {boolean} 要切换的状态
 */
export function set_loading(state) {
    is_loading.value = state;




}