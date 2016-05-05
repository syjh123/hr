package com.dmu.hr.controller;



import com.dmu.hr.model.User;
import com.dmu.hr.service.UserService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by zl on 2015/8/27.
 */
@Controller
public class UserController {

    private Logger logger = Logger.getLogger(UserController.class);

    @Autowired
    private UserService userService;

//    @RequestMapping("/getUserInfo")
//    @ResponseBody
//    public User getUserInfo() {
//        System.out.println("user.getName():");
//        User user = userService.getUserInfo();
//        if(user!=null){
//            System.out.println("user.getName():"+user.getName());
//            logger.info("user.getAge():"+user.getAge());
//        }
//        return user;
//    }



}
