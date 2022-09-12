package com.budgetor;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

@Controller
public class HomeController {
    @GetMapping("/")
    fun index() : String {
        return "landingFragments/landingPg";
    }

    @GetMapping("/about")
    fun about() : String {
        println("In about get mapping");
        return "landingFragments/about";
    }

    @GetMapping("/app")
    fun app() : String {
        println("in app get mapping");
        return "landingFragments/app";
    }

    @GetMapping("/contact")
    fun contact() : String {
        println("in contact get mapping");
        return "landingFragments/contact";
    }

    @GetMapping("/error")
    fun error() : String {
        return "error";
    }
}