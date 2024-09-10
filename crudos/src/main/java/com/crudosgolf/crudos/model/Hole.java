package com.crudosgolf.crudos.model;

public class Hole {
    private int holeId;
    private int blueDistance;
    private int par;
    
    public Hole(int blueDistance, int par) {
        this.blueDistance = blueDistance;
        this.par = par;
    }
    public Hole() {
    }
    
    public int getHoleId() {
        return holeId;
    }
    public void setHoleId(int holeId) {
        this.holeId = holeId;
    }
    public int getBlueDistance() {
        return blueDistance;
    }
    public void setBlueDistance(int blueDistance) {
        this.blueDistance = blueDistance;
    }
    public int getPar() {
        return par;
    }
    public void setPar(int par) {
        this.par = par;
    }
    @Override
    public String toString() {
        return "Hole [blueDistance=" + blueDistance + ", par=" + par + "]";
    }
    
}
