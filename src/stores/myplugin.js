// 参考官网和https://article.juejin.cn/post/7212435153573609529
export function myPiniaPlugin({ store, options }) {
    if (!options.persist) return

    // 读
    const state = localStorage.getItem(store.$id)
    state && store.$patch(JSON.parse(state))

    // 写
    store.$subscribe((mutation, state) => {
        localStorage.setItem(mutation.storeId, JSON.stringify(state))
    })
}
