package com.example.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {
	Random random = new Random();

	@RequestMapping("/{id}")
	public Map<String, Object> getUserDetails(@PathVariable String id) {
		Map<String, Object> foo = new HashMap<>();
		foo.put("id", id);
		foo.put("name", "foo");
		foo.put("age", 24);
		return foo;
	}

	@RequestMapping("")
	public List<Map<String, Object>> fooList() {
		List<Map<String, Object>> result = new ArrayList<>();
		for (int i = 0; i < 200; i++) {
			Map<String, Object> obj = new HashMap<>();
			obj.put("id", i);
			obj.put("name", "name-" + i);
			obj.put("age", random.nextInt(50));
			obj.put("gender", (random.nextInt(2) == 0) ? "F" : "M");
			result.add(obj);
		}
		return result;
	}
}
