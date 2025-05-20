package org.alilearning.service;

import org.alilearning.model.Reason;
import org.alilearning.repository.ReasonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReasonService {
    private final ReasonRepository reasonRepository;
   
    @Autowired
    public ReasonService(ReasonRepository reasonRepository){
        this.reasonRepository = reasonRepository;
    }

    public Reason createReason(String reason){
        Reason newReason = new Reason(reason);
        newReason.setReason(reason);
        return reasonRepository.save(newReason);
    }
    // add method to get reasons after I set that up in the frontend
    
}
