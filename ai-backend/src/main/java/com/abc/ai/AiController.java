package com.abc.ai;

import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api/ai")
public class AiController {

    private final OpenAiService aiService;

    public AiController(OpenAiService aiService) {
        this.aiService = aiService;
    }

    @PostMapping("/ask")
    public Map<String, String> ask(@RequestBody Map<String, String> req) {

        String message = req.get("message");
        String role = req.getOrDefault("role", "USER");

        String reply = aiService.askAI(message, role);

        return Map.of("reply", reply);
    }
}
