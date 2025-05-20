package org.alilearning.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Reason {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String reason;

    public Reason(){} // default constructor required by JPA
    public Reason(String reason){
        this.reason = reason;
    }

    public Long getId(){
        return id;
    }

    // public void setId(long id){
    //     this.id = id;
    // }
    public String getReason(){
        return reason;
    }
    public void setReason(String reason){
        this.reason = reason;
    }
}
