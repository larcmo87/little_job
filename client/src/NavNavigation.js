let typeNavigation = "";
let navigateTo = "";
let activeLink = "";
let logOnOffText = "";


export function getNavType(){
	return typeNavigation;
};

export function setNavType(type){
	typeNavigation = type;
};

export function getNavPath(){
		return navigateTo;
};

export function setNavPath(path){
		navigateTo = path;
};

export function getActive(){
	return activeLink;
};

export function setActive(link){
	activeLink = link;
}


export function getLogOffOnText(){
	return logOnOffText;
}

export function setLogOffOnText(text){
	logOnOffText = text;
}



