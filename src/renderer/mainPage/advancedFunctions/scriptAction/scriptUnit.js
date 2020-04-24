class scriptUnit {
  constructor(that) {
	    this.that = that;
  }
  tabGroupFun(index) {
    const loading = this.that.$loading({
			         lock: true,
			       });
    this.that.tableData = this.that.groupArr[this.that.tabGroup];
    this.that.tableSubData = this.that.tableData[index];
    loading.close();
  }
}
export default scriptUnit;
