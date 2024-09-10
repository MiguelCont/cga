package com.crudosgolf.crudos.model;

public class Player {
    private int playerId;
    private String firstName;
    private String lastName;
    private Location location;
    private String shortDescription;
    private String longDesctription;
    
    public Player(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    public Player() {
    }
    
    public int getPlayerId() {
        return playerId;
    }
    
    public void setPlayerId(int playerId) {
        this.playerId = playerId;
    }
    
    public String getFirstName() {
        return firstName;
    }
    
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    
    public String getLastName() {
        return lastName;
    }
    
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    
    public Location getLocation() {
        return location;
    }
    
    public void setLocation(Location location) {
        this.location = location;
    }
    
    public String getShortDescription() {
        return shortDescription;
    }
    
    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }
    
    public String getLongDesctription() {
        return longDesctription;
    }
    
    public void setLongDesctription(String longDesctription) {
        this.longDesctription = longDesctription;
    }

    @Override
    public String toString() {
        return "Player [playerId=" + playerId + ", firstName=" + firstName + ", lastName=" + lastName + ", location="
                + location + ", shortDescription=" + shortDescription + ", longDesctription=" + longDesctription + "]";
    }

    
    
}
