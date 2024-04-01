  const schedule = [

    // April
    { day: "Monday, April 1", users: ["CA", "DC", "Reshma"] },
    { day: "Tuesday, April 2", users: ["SAFE", "Janina", "SVG"] },
	
    { day: "Sunday, April 7", users: ["RCMS", "GCIF", "GCIF"] },
    { day: "Monday, April 8", users: ["Ajijee", "GCIF", "GCIF"] },
    { day: "Tuesday, April 9", users: ["SVG", "DC", "Gan"] },
	
    { day: "Sunday, April 14", users: ["DC", "CA", "SVG"] },
    { day: "Monday, April 15", users: ["CA", "SAFE", "RCMS"] },
    { day: "Tuesday, April 16", users: ["Jon", "GCIF", "GCIF"] },
	
    { day: "Sunday, April 21", users: ["SAFE", "Fatin", "CA"] },
    { day: "Monday, April 22", users: ["CA", "SVG", "SAFE"] },
    { day: "Tuesday, April 23", users: ["RCMS", "DC", "FD"] },
	
    { day: "Sunday, April 28", users: ["SVG", "RCMS", "CA"] },
    { day: "Monday, April 29", users: ["CA", "Reshma", "SAFE"] },
    { day: "Tuesday, April 30", users: ["DC", "SAFE", "SVG"] },

    // May
    { day: "Sunday, May 5", users: ["FD", "SAFE", "RCMS"] },
    { day: "Monday, May 6", users: ["CA", "SVG", "DC"] },
    { day: "Tuesday, May 7", users: ["SAFE", "RCMS", "CA"] },
	
    { day: "Sunday, May 12", users: ["RCMS", "DC", "SVG"] },
    { day: "Monday, May 13", users: ["CA", "FD", "SAFE"] },
    { day: "Tuesday, May 14", users: ["SVG", "CA", "DC"] },
	
    { day: "Sunday, May 19", users: ["DC", "SAFE", "FD"] },
    { day: "Monday, May 20", users: ["CA", "SVG", "DC"] },
    { day: "Tuesday, May 21", users: ["FD", "RCMS", "CA"] },
	
    { day: "Sunday, May 26", users: ["SAFE", "GCIF", "GCIF"] },
    { day: "Monday, May 27", users: ["CA", "GCIF", "GCIF"] },
    { day: "Tuesday, May 28", users: ["DC", "CA", "RCMS"] },

    // June
    { day: "Sunday, June 2", users: ["SV", "DC", "CA"] },
    { day: "Monday, June 3", users: ["CA", "FD", "DC"] },
    { day: "Tuesday, June 4", users: ["DC", "CA", "RC"] },
	  
    { day: "Sunday, June 9", users: ["FD", "SF", "CA"] },
    { day: "Monday, June 10", users: ["CA", "DC", "SV"] },
    { day: "Tuesday, June 11", users: ["SF", "RC", "FD"] },
	  
    { day: "Sunday, June 16", users: ["RC", "SV", "CA"] },
    { day: "Monday, June 17", users: ["DC", "CA", "SF"] },
    { day: "Tuesday, June 18", users: ["SV", "DC", "CA"] },
	  
    { day: "Sunday, June 23", users: ["CA", "FD", "DC"] },
    { day: "Monday, June 24", users: ["DC", "CA", "RC"] },
    { day: "Tuesday, June 25", users: ["FD", "SF", "CA"] },
	  
    { day: "Sunday, June 30", users: ["CA", "DC", "SV"] },	

    // July
    { day: "Monday, July 1", users: ["SF", "RC", "FD"] },
    { day: "Tuesday, July 2", users: ["RC", "SV", "CA"] },
	  
    { day: "Tuesday, July 7", users: ["SF", "RC", "FD"] },
    { day: "Sunday, July 8", users: ["RC", "SV", "CA"] },
    { day: "Monday, July 9", users: ["DC", "CA", "SF"] },
	  
    { day: "Sunday, July 14", users: ["SV", "DC", "CA"] },
    { day: "Monday, July 15", users: ["CA", "FD", "DC"] },
    { day: "Tuesday, July 16", users: ["DC", "CA", "RC"] },
	  
    { day: "Sunday, July 21", users: ["FD", "SF", "CA"] },
    { day: "Monday, July 22", users: ["CA", "DC", "SV"] },
    { day: "Tuesday, July 23", users: ["SF", "RC", "FD"] },
	  
    { day: "Sunday, July 28", users: ["RC", "SV", "CA"] },
    { day: "Monday, July 29", users: ["DC", "CA", "SF"] },
    { day: "Tuesday, July 30", users: ["SV", "DC", "CA"] },

    // August
    { day: "Sunday, August 4", users: ["CA", "FD", "DC"] },
    { day: "Monday, August 5", users: ["DC", "CA", "RC"] },
    { day: "Tuesday, August 6", users: ["FD", "SF", "CA"] },
	  
    { day: "Sunday, August 11", users: ["CA", "DC", "SV"] },
    { day: "Monday, August 12", users: ["SF", "RC", "FD"] },
    { day: "Tuesday, August 13", users: ["RC", "SV", "CA"] },
	  
    { day: "Sunday, August 18", users: ["DC", "CA", "SF"] },
    { day: "Monday, August 19", users: ["SV", "DC", "CA"] },
    { day: "Tuesday, August 20", users: ["CA", "FD", "DC"] },
	  
    { day: "Sunday, August 25", users: ["DC", "CA", "RC"] },
    { day: "Monday, August 26", users: ["FD", "SF", "CA"] },
    { day: "Tuesday, August 27", users: ["CA", "DC", "SV"] },

  // September
    { day: "Sunday, September 1", users: ["SF", "RC", "FD"] },
    { day: "Monday, September 2", users: ["RC", "SV", "CA"] },
    { day: "Tuesday, September 3", users: ["DC", "CA", "SF"] },
	  
    { day: "Sunday, September 8", users: ["SV", "DC", "CA"] },
    { day: "Monday, September 9", users: ["CA", "FD", "DC"] },
    { day: "Tuesday, September 10", users: ["DC", "CA", "RC"] },
	  
    { day: "Sunday, September 15", users: ["FD", "SF", "CA"] },
    { day: "Monday, September 16", users: ["CA", "DC", "SV"] },
    { day: "Tuesday, September 17", users: ["SF", "RC", "FD"] },
	  
    { day: "Sunday, September 22", users: ["RC", "SV", "CA"] },
    { day: "Monday, September 23", users: ["DC", "CA", "SF"] },
    { day: "Tuesday, September 24", users: ["SV", "DC", "CA"] },
	  
    { day: "Sunday, September 29", users: ["CA", "FD", "DC"] },
    { day: "Monday, September 30", users: ["DC", "CA", "RC"] },
    { day: "Monday, September 30", users: ["FD", "SF", "CA"] },

    // October
    { day: "Sunday, October 6", users: ["CA", "DC", "SV"] },
    { day: "Monday, October 7", users: ["SF", "RC", "FD"] },
    { day: "Tuesday, October 8", users: ["RC", "SV", "CA"] },
	  
    { day: "Sunday, October 13", users: ["DC", "CA", "SF"] },
    { day: "Monday, October 14", users: ["SV", "DC", "CA"] },
    { day: "Tuesday, October 15", users: ["CA", "FD", "DC"] },
	  
    { day: "Sunday, October 20", users: ["DC", "CA", "RC"] },
    { day: "Monday, October 21", users: ["FD", "SF", "CA"] },
    { day: "Tuesday, October 22", users: ["CA", "DC", "SV"] },
	  
    { day: "Sunday, October 27", users: ["SF", "RC", "FD"] },
    { day: "Monday, October 28", users: ["RC", "SV", "CA"] },
    { day: "Tuesday, October 29", users: ["DC", "CA", "SF"] },

    // November
    { day: "Sunday, November 3", users: ["SV", "DC", "CA"] },
    { day: "Monday, November 4", users: ["CA", "FD", "DC"] },
    { day: "Tuesday, November 5", users: ["DC", "CA", "RC"] },
	  
    { day: "Sunday, November 10", users: ["FD", "SF", "CA"] },
    { day: "Monday, November 11", users: ["CA", "DC", "SV"] },
    { day: "Tuesday, November 12", users: ["SF", "RC", "FD"] },
	  
    { day: "Sunday, November 17", users: ["RC", "SV", "CA"] },
    { day: "Monday, November 18", users: ["DC", "CA", "SF"] },
    { day: "Tuesday, November 19", users: ["SV", "DC", "CA"] },
	  
    { day: "Sunday, November 24", users: ["CA", "FD", "DC"] },
    { day: "Monday, November 25", users: ["DC", "CA", "RC"] },
    { day: "Tuesday, November 26", users: ["FD", "SF", "CA"] },

    // December
    { day: "Sunday, December 1", users: ["CA", "DC", "SV"] },
    { day: "Monday, December 2", users: ["SF", "RC", "FD"] },
    { day: "Tuesday, December 3", users: ["RC", "SV", "CA"] },
	  
    { day: "Sunday, December 8", users: ["DC", "CA", "SF"] },
    { day: "Monday, December 9", users: ["SV", "DC", "CA"] },
    { day: "Tuesday, December 10", users: ["CA", "FD", "DC"] },
	  
    { day: "Sunday, December 15", users: ["DC", "CA", "RC"] },
    { day: "Monday, December 16", users: ["FD", "SF", "CA"] },
    { day: "Tuesday, December 17", users: ["CA", "DC", "SV"] },
	  
    { day: "Sunday, December 22", users: ["SF", "RC", "FD"] },
    { day: "Monday, December 23", users: ["RC", "SV", "CA"] },
    { day: "Tuesday, December 24", users: ["DC", "CA", "SF"] },
	  
    { day: "Sunday, December 29", users: ["SV", "DC", "CA"] },
    { day: "Monday, December 30", users: ["CA", "FD", "DC"] },
    { day: "Tuesday, December 31", users: ["DC", "CA", "RC"] }
  ];
