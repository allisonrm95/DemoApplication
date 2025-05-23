package org.alilearning.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
// import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
// @EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")  // Allow all paths
                .allowedOriginPatterns("http://localhost:[*]")  // Allow any localhost port
                .allowedMethods("*")  // Allow all methods
                .allowedHeaders("*")  // Allow all headers
                .allowCredentials(true)
                .maxAge(3600);
    }
} 