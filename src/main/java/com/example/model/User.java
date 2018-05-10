package com.example.model;

import org.springframework.data.annotation.Id;

public class User {

    @Id
    private String id;
    private String name;
    private String email;
    private String provider;
    private String providerPic;
    private String providerId;
    
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getProvider() {
        return provider;
    }

    public void setProvider(String provider) {
        this.provider = provider;
    }

    public String getProviderPic() {
        return providerPic;
    }

    public void setProviderPic(String providerPic) {
        this.providerPic = providerPic;
    }

    public String getProviderId() {
        return providerId;
    }

    public void setProviderId(String providerId) {
        this.providerId = providerId;
    }
}
