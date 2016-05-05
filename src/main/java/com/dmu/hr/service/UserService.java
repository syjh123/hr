package com.dmu.hr.service;


import com.dmu.hr.entity.RsUser;
import com.dmu.hr.mapper.UserMapper;
import com.dmu.hr.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by zl on 2015/8/27.
 */

@Service
public class UserService {

    @Autowired
    private UserMapper userMapper;



    public boolean login(String username,String password){
        System.out.println(username);
        String pswd=userMapper.findPasswordByUsername(username);
        if (pswd!=null&&password.equals(password)) {
            return true;
        }
        return false;

    }

}
