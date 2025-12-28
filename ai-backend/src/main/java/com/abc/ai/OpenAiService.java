package com.abc.ai;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@Service
public class OpenAiService {

    @Value("${openai.api.key}")
    private String apiKey;

    @Value("${openai.model}")
    private String model;

    private static final String OPENAI_URL =
            "https://api.openai.com/v1/chat/completions";

    public String askAI(String message, String role) {

        String systemPrompt =
                role.equals("ADMIN")
                ? "You are a university admin AI assistant."
                : "You are a university helpdesk assistant.";

        List<Map<String, String>> messages = List.of(
            Map.of("role", "system", "content", systemPrompt),
            Map.of("role", "user", "content", message)
        );

        OpenAiRequest request =
                new OpenAiRequest(model, messages);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(apiKey);

        HttpEntity<OpenAiRequest> entity =
                new HttpEntity<>(request, headers);

        RestTemplate restTemplate = new RestTemplate();
        Map<?, ?> response =
                restTemplate.postForObject(OPENAI_URL, entity, Map.class);

        List<?> choices = (List<?>) response.get("choices");
        Map<?, ?> choice = (Map<?, ?>) choices.get(0);
        Map<?, ?> msg = (Map<?, ?>) choice.get("message");

        return msg.get("content").toString();
    }
  }
