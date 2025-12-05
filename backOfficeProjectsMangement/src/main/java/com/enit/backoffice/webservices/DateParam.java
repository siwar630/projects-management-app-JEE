package com.enit.backoffice.webservices;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import jakarta.ws.rs.WebApplicationException;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.core.Response.Status;


public class DateParam {
	  private final Date date;

	  public DateParam(String dateStr) throws WebApplicationException {
	    if (null==dateStr) {
	      this.date = null;
	      return;
	    }
	    final DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
	    try {
	      this.date = dateFormat.parse(dateStr);
	    } catch (ParseException e) {
	      throw new WebApplicationException(Response.status(Status.BAD_REQUEST)
	        .entity("Couldn't parse date string: " + e.getMessage())
	        .build());
	    }
	  }

	  public Date getDate() {
	    return date;
	  }
	}