package org.alilearning.controller;

import org.alilearning.model.Reason;
import org.alilearning.service.ReasonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReasonController {
    private final ReasonService reasonService;

    @Autowired
    public ReasonController(ReasonService reasonService){
        this.reasonService = reasonService;
    }

    @PostMapping("/reasons")
    public Reason createReason(@RequestBody String reason){
        return reasonService.createReason(reason);
    }

    // add get reasons eventually
}
