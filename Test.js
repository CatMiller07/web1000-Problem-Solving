function getDrinkbyProfession(profession){
	
	 switch( profession.toUpperCase() ) {
		 case "JABRONI" :
			  return "Patron Tequila";
			 
	     case "SCHOOL COUNSELOR" :
			  return "Anything with Alcohol";
			   		 
	    case "DOCTOR" :
			  return "Whiskey";
			  break;	
	    case "PROGRAMMER" :
			  return "Hipster Craft Beer";
			  break;
		case "BIKE GANG MEMBER" :
			  return "Moonshine";
			  break;	
	   case "TEACHER" :
			  return "Bourbon";
			  break;
	   case "CHEF" :
			  return "Red Wine";
			  break;		 
	   case "JOURNALIST" :
			  return "White Wine";
			  break;
       case "POLITICIAN" :
			  return "champagne";
			  break;
	   case "RAPPER" :
			  return "Cristal";
			  break;
		 default:
			  return "Beer";
			 
			 
	 }
}

function exp(base,exponent){
	
	return Math.pow(base,exponent);
}

function tripleAll(arr){
	return res = arr.map(function(a){
		 return a * 3;
	});
	

}