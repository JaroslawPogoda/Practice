/**
 * 
 */
package com.revision.projectone;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

/**
 * @author jarek
 *
 */
//create instance 
@Component
//create more instances of this instance, or create more beans (create beans when requested by context.getBean(blah blah...)
@Scope(value="prototype")
public class School {
	
	
	//Properties
	private String sname;
	private String slocation;
	private int districtnum;
	
	/**
	 * 
	 */
	
	public School() {
		// TODO Auto-generated constructor stub
	}

	public String getSname() {
		return sname;
	}
	public void setSname(String sname) {
		this.sname = sname;
	}
	public String getSlocation() {
		return slocation;
	}
	public void setSlocation(String slocation) {
		this.slocation = slocation;
	}
	public int getDistrictnum() {
		return districtnum;
	}
	public void setDistrictnum(int districtnum) {
		this.districtnum = districtnum;
	}
	
	public void display() {
		System.out.println( "School Name:" + sname + ", Location:" + slocation + ", District:" + districtnum + "");
	}
}
