package br.com.springmvc.bean;

public class ParametrosBean {
	
	private String parametro1;
	private String parametro2;
	private String parametro3;
	
	public String getParametro1() {
		return parametro1;
	}
	public void setParametro1(String parametro1) {
		this.parametro1 = parametro1;
	}
	public String getParametro2() {
		return parametro2;
	}
	public void setParametro2(String parametro2) {
		this.parametro2 = parametro2;
	}
	public String getParametro3() {
		return parametro3;
	}
	public void setParametro3(String parametro3) {
		this.parametro3 = parametro3;
	}

	@Override
	public String toString() {
		return this.parametro1 + " " + this.parametro2 + " " + this.parametro3;
	}
}
