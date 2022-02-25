package com.hw.weektwo;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope (value="prototype")
public class Product {
	//Properies
	private int productID;
	private String productName;
	private int quantity;
	private double priceForEach;
	
	//Getters &&setters
	public int getProductID() {
		return productID;
	}
	public void setProductID(int productID) {
		this.productID = productID;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public double getPriceForEach() {
		return priceForEach;
	}
	public void setPriceForEach(double priceForEach) {
		this.priceForEach = priceForEach;
	}
	@Override
	public String toString() {
		return "Product"+ " Name:" + productName + ", quantity:" + quantity
				+ ", price=" + priceForEach + "";
	}
	
}
