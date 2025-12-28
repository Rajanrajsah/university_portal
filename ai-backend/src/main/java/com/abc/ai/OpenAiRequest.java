package com.abc.ai;

import java.util.List;
import java.util.Map;

public class OpenAiRequest {

    public String model;
    public List<Map<String, String>> messages;

    public OpenAiRequest(String model, List<Map<String, String>> messages) {
        this.model = model;
        this.messages = messages;
    }
}
