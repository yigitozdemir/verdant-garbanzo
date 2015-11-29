module.exports = {
	newStack: [],
	lastStackIndex: 0,
	
	depthFirstSearch: function(categories, callback){
		this.lastStackIndex = 0;
        this.newStack = [];
        this.newStack.push(categories[0]);
        categories.splice(0,1);
		
        
		while(categories.length > 0){
            var i = 0;
            
            while(i < categories.length){
                if(categories[i].Parent == this.newStack[this.lastStackIndex].CategoryId){
                    this.newStack.push(categories[i]);
                    categories.splice(i, 1);
                    this.lastStackIndex = this.newStack.length - 1;
                    i = categories.length+111;
                }
                i++;
            }
            
            if(i == categories.length){
                if(this.lastStackIndex > 0){
                    this.lastStackIndex--;
                } else {
                    for(var j = 0; j < categories.length; j++){
                        if(categories[j].Parent == 0){
                            this.newStack.push(categories[j]);
                            this.lastStackIndex = this.newStack.length - 1;
                            categories.splice(j,1);
                            j = categories.length + 5;
                        }
                    }
                }
            }
		}
		callback(this.newStack);
	}
};