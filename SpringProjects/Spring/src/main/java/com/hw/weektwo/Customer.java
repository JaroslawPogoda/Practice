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
public class Customer {
	private ArrayList<Order> order;
	private Address addr;
	private String custName;
	private String custphone;
	private int custId;
	
	/**
	 * 
	 */
	public Customer() {
		// TODO Auto-generated constructor stub
	}

	
	public ArrayList<Order> getOrder() {
		return order;
	}


	public void setOrder(ArrayList<Order> order) {
		this.order = order;
	}


	public Address getAddr() {
		return addr;
	}

	public void setAddr(Address addr) {
		this.addr = addr;
	}

	public String getCustName() {
		return custName;
	}

	public void setCustName(String custName) {
		this.custName = custName;
	}

	public String getCustphone() {
		return custphone;
	}

	public void setCustphone(String custphone) {
		this.custphone = custphone;
	}

	public int getCustId() {
		return custId;
	}

	public void setCustId(int custId) {
		this.custId = custId;
	}
	public void printAllReceipts() {
		for(Order order:order) {
			System.out.print(order.toString());
		}
		System.out.println();
	}
	public void displayCustInfo() {
		System.out.println( "Customer Name=" + custName +",\n Customer Phone: "+custphone);
		System.out.println(addr.toString());
		printAllReceipts();
		
	}
}
