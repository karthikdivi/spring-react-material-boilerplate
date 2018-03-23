package com.example.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/foo")
public class FooController {

	@RequestMapping
	public Map<String, Object> foo() {
		Map<String, Object> foo = new HashMap<>();
		foo.put("name", "foo");
		foo.put("age", 24);
        return foo;
    }
}
