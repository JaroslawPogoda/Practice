/**
 * 
 */
package com.hw.weektwo;

import java.util.ArrayList;


import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

/**
 * @author jarek
 *
 */
@Component
@Scope(value="prototype")
public class Order {
	private int orderID;
	private ArrayList<Product> productList;
	/**
	 * 
	 */
	public Order() {
		// TODO Auto-generated constructor stub
	}
	public int getOrderID() {
		return orderID;
	}
	public void setOrderID(int orderID) {
		this.orderID = orderID;
	}
	public ArrayList<Product> getProductList() {
		return productList;
	}
	public void setProductList(ArrayList<Product> productList) {
		this.productList = productList;
	}
	public String productListToString() {
		String returnString="";
		for (Product product:productList) {
			returnString+=product.toString()+", \n ";
		}
		return returnString;
	}
	@Override
	public String toString() {
		return "Order Id:" + orderID + ", product list=" + productListToString() + "";
	}
	
	
	

}
