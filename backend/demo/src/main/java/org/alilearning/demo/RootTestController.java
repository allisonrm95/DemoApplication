package org.alilearning.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RootTestController {
    @GetMapping("/root-test")
    public String rootTest() {
        return "Root test is working!";
    }
}