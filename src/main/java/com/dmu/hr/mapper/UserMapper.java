package com.dmu.hr.mapper;


import com.dmu.hr.entity.RsUser;

/**
 * Created by zl on 2015/8/27.
 */
public interface UserMapper {

    public String findPasswordByUsername(String username);
}
