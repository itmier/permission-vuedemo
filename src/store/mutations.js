export default {
    // LOGIN_IN(state, token) {
    //     state.UserToken = token
    // },
    // LOGIN_OUT(state) {
    //     state.UserToken = ''
    // },
    // toggleNavCollapse(state) {
    //     state.isSidebarNavCollapse = !state.isSidebarNavCollapse
    // },
    setCrumbList(state, list) {
        console.log('crumbList')
        console.log(list)
        state.crumbList = list
    }
}