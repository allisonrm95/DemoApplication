package org.alilearning.controller;

import org.alilearning.model.Reason;
import org.alilearning.service.ReasonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")  // Add base path
public class ReasonController {
    private final ReasonService reasonService;

    @Autowired
    public ReasonController(ReasonService reasonService){
        this.reasonService = reasonService;
    }
    @GetMapping("/")
    public String root() {
        return "Root is working!";
    }

    @GetMapping("/test")
    public String test() {
        return "API is working!";
    }
    @PostMapping("/reasons")
    public Reason createReason(@RequestBody Reason reason){
        return reasonService.createReason(reason.getReason());
    }

    // add get reasons eventually
}
