package br.spin.crud;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/pacientes/**")
                .allowedOrigins("*") // Permitir todas as origens. Você pode restringir a lista se preferir.
                .allowedMethods("*") // Permitir todos os métodos.
                .allowedHeaders("*"); // Permitir todos os cabeçalhos.
        registry.addMapping("/unidades/**")
                .allowedOrigins("*")
                .allowedMethods("*")
                .allowedHeaders("*");
        registry.addMapping("/atendimentos/**")
                .allowedOrigins("*")
                .allowedMethods("*")
                .allowedHeaders("*");
        registry.addMapping("/login/**")
                .allowedOrigins("*")
                .allowedMethods("*")
                .allowedHeaders("*");
    }
}