package com.dmu.hr.controller;

import com.dmu.hr.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by LZZ on 2016/5/4.
 */
@Controller
public class LoginController {
    @Autowired
    private UserService userService;

    @RequestMapping("/login")
    public String login(@ModelAttribute("username") String username,@ModelAttribute("password") String password, HttpServletRequest request,HttpServletResponse response, Model model) {
        if (userService.login(username,password)){
            Cookie usernameCookie=new Cookie("username",username);
            response.addCookie(usernameCookie);
            Cookie passwordCookie=new Cookie("password",password);
            response.addCookie(passwordCookie);
            return "hello";
        }
        return "login.html";
    }

}
