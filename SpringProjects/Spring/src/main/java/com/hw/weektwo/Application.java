package com.hw.weektwo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import java.util.ArrayList;
import java.util.Random;
@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		ConfigurableApplicationContext context =SpringApplication.run(Application.class, args);
		//setting store
		Shop firstShop=context.getBean(Shop.class);
		ArrayList<Order> ordersForStore=new ArrayList<Order>();
		firstShop.setOwnerName("Joe");
		firstShop.setShopName("Joe's u want shop here");
		Address adrsStore= context.getBean(Address.class);
		firstShop.setAddr(adrsStore);
		Random rand= new Random();
		ArrayList<Product> addToCurrentStock=new ArrayList<Product>();
		for(int i = 0 ; i <4;i++) {
			int numOfProducts=rand.nextInt(3);
			ordersForStore.add(context.getBean(Order.class));
			ordersForStore.get(i).setOrderID(100+i);
			ArrayList<Product> tempProductListForOrders=new ArrayList<Product>();
			for(int j= 0 ;j<numOfProducts;j++) {
				tempProductListForOrders.add(context.getBean(Product.class));
				tempProductListForOrders.get(j).setPriceForEach((i+1)*rand.nextDouble(50));
				tempProductListForOrders.get(j).setProductID(i+j);
				tempProductListForOrders.get(j).setProductName("productname"+(i+j));
				tempProductListForOrders.get(j).setQuantity(rand.nextInt(7-1)+1);
				addToCurrentStock.add(tempProductListForOrders.get(j));
			}
			ordersForStore.get(i).setProductList(tempProductListForOrders);
		}
		firstShop.setOrderList(ordersForStore);
		firstShop.setCurrentStock(addToCurrentStock);
		//end of  shop initialization
		//displaying store
		firstShop.displayStoreInfo();
		//creating customer
		Customer cust1= context.getBean(Customer.class);
		cust1.setAddr(adrsStore);
		cust1.setCustId(124546);
		cust1.setCustphone("(0231)21312131");
		ArrayList<Order> custOrder=new ArrayList<Order>();
		custOrder.add(firstShop.getOrderList().get(0));
		cust1.setOrder(custOrder);
		cust1.setCustName("Tania");
		//end of creating customer
		//display customer 1
		cust1.displayCustInfo();
		//creating customer
		Customer cust2= context.getBean(Customer.class);
		cust2.setAddr(adrsStore);
		cust2.setCustId(1256789);
		cust2.setCustphone("(761)21675731");
		ArrayList<Order> custOrder2=new ArrayList<Order>();
		custOrder2.add(firstShop.getOrderList().get(1));
		custOrder2.add(firstShop.getOrderList().get(2));
		cust2.setOrder(custOrder2);
		cust2.setCustName("lola");
		//end of creating customer
		//display customer 1
		cust2.displayCustInfo();
		
		
	}

}
