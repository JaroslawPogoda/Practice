/**
 * 
 */
package com.hw.weektwo;

import java.util.ArrayList;

import org.springframework.stereotype.Component;

/**
 * @author jarek
 *
 */
@Component
public class Shop {
	private String shopName;
	private ArrayList<Product> currentStock;
	private ArrayList<Order> orderList;
	private Address addr;
	private String ownerName;
	
	/**
	 * 
	 */
	public Shop() {
		// TODO Auto-generated constructor stub
	}

	public String getShopName() {
		return shopName;
	}

	public void setShopName(String shopName) {
		this.shopName = shopName;
	}

	public ArrayList<Product> getCurrentStock() {
		return currentStock;
	}

	public void setCurrentStock(ArrayList<Product> currentStock) {
		this.currentStock = currentStock;
	}

	public ArrayList<Order> getOrderList() {
		return orderList;
	}

	public void setOrderList(ArrayList<Order> orderList) {
		this.orderList = orderList;
	}

	public Address getAddr() {
		return addr;
	}

	public void setAddr(Address addr) {
		this.addr = addr;
	}

	public String getOwnerName() {
		return ownerName;
	}

	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
	}
	public void printAllOrders() {
		for(Order order:orderList) {
			System.out.println("Order List");
			System.out.print(order.toString());
		}
		System.out.println();
	}
	public void printAllCurrentStock() {
		for(Product product:currentStock) {
			System.out.println("Stock inventory List");
			System.out.print(product.toString());
		}
		System.out.println();
	}

	
	public void displayStoreInfo() {
		System.out.println( "Shop Name=" + shopName +",\n Owner Name=" + ownerName);
		System.out.println(addr.toString());
		printAllCurrentStock();
		printAllOrders();
	}
	
	

}
