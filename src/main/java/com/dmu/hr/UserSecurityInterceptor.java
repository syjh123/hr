package com.dmu.hr;

import com.dmu.hr.service.UserService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by LZZ on 2016/5/4.
 */
public class UserSecurityInterceptor implements HandlerInterceptor {
    private static Logger logger = Logger.getLogger(UserSecurityInterceptor.class);

    @Autowired
    private UserService userService;
    @Override
    public boolean preHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o) throws Exception {
        logger.info("UserSecurity");
        Cookie[] cookies=httpServletRequest.getCookies();
        logger.debug(cookies.length);
        String username=null;
        String password=null;
        for(Cookie cookie : cookies){

            if (cookie.getName().equals("username")) {
                username=cookie.getValue(); // get the cookie value
            }
            if (cookie.getName().equals("password")) {
                password=cookie.getValue(); // get the cookie value
            }
        }
        logger.info(username.toString()+password.toString());
        if (username!=null&&password!=null){
            if(userService.login(username,password))
            return true;
        }


        return false;
    }

    @Override
    public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {

    }
}
