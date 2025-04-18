package com.eduorganize.proctor_planner;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FrontendController {

    // forward anything that doesn't contain a dot (i.e. not a static asset) 
    @RequestMapping(value = "/**/{path:[^.]+}")
    public String forward() {
        return "forward:/index.html";
    }

    // and also root
    @RequestMapping("/")
    public String root() {
        return "forward:/index.html";
    }
}