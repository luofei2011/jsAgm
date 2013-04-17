/*
 * 插入排序
 * O(n^2)
 * */
Array.prototype.insertSort = function () {
	var i,j,temp;
	for(i=2; i<this.length; i++){
		//先判断一下,不是递增序列则进行移动插入操作
		if(this[i] < this[i-1]){
			//记录需要进行插入的元素,找到它应该插入的位置
			temp = this[i];
			/*
			 * 边移动边比较,直到找到合适的插入位置
				for(j=i-1; temp <= this[j]; j--)
					this[j+1] = this[j];
				这样比较会进行一次不必要的比较,因为第一次的比较在上一层if已经做过.
			*/
		    //直接移动,免去不必要的比较
		    this[i] = this[i-1];
			for(j=i-2; temp <= this[j]; j--)
				this[j+1] = this[j];
			this[j+1] = temp;
		}
	}
	return this;
}

/*
 * 折半插入  
 * O(n^2)
 * */
Array.prototype.BInsertSort = function() {
	var i,j,temp,low,high;
	for(i=2; i<this.length; i++){
		temp = this[i];	//记录当前需比较项
		low = 1;	//指向已排序好的第一个元素
		high = i-1;	//指向已排序好的最后一个元素
		while(low <= high){
			var middle = parseInt((low+high)/2);	//折半的位置
			//插入点在排序好的前半部分
			if(temp < this[middle])	
				high = middle - 1;
			//插入点在排序好的后半部分
			else  
				low = middle + 1;
		}
		//移动插入点以后的每项记录
		for(j=i-1; j>=high+1; j--) 
			this[j+1] = this[j];
		this[high+1] = temp;
	}
	return this;
}

/*
 * 冒泡排序
 * O(n^2)
 * js内部sort()采用此排序算法?
 * */
Array.prototype.bubbleSort = function() {
	//理论上进行n-1趟排序,当某一次排序过程中并没有发生记录交换的时候证明排序已经完成了.
    //记录是否发生了交换记录的事件
	var flag = true;
	for(var i=this.length-1,flag = true; i>0 && flag; --i){
		flag = false;
		for(var j=0; j<i; ++j){
			if(this[j] > this[j+1]){
				var temp = this[j];
				this[j] = this[j+1];
				this[j+1] = temp;
				flag = true;
			}
		}
	}
	return this;
}
