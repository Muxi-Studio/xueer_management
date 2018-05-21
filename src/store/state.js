const state = {
  is_admin: false, // 管理员
  is_operator: false, // 运营
  is_user: false, // 普通用户
  role_id: 3, // 角色 id
  is_logined: false,
  admin_tip: false, // 非管理员试图进行管理员操作时的提示
  operator_tip: false, // 非运营试图进行运营者操作时的提示
  is_loading: false, // 加载中
  token: ""
}

export default state;