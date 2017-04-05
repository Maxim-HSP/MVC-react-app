import React from "react"

export default class Pagination extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        //获取props上的页码数据
        let {
            curPage,
			eachPage,
			sumPage,
			maxPage,
			setCurPage
		} = this.props
        
        //依据最后页生成react的option(!)虚拟节点(!注意不是字符串，不是普通的html节点)，push进arr的是react组件对象而非字符串，放在render下会自动解构遍历
		let arr = [];
		for(let i = 1; i <= maxPage; i++) {
			arr.push(<option value={i}>{i}</option>)
		}
        
		return (
			<div>
				<div>
					当前页: <select ref="curPage" onChange={() => {
						setCurPage(this.refs.curPage.value)
					}} value={curPage}>{arr}</select>
					每页显示条数: <input type="text" />
					总条数: <span>{ sumPage }</span>
					总页数: <span>{ maxPage }</span>
				</div>
				<div>
					<input onClick={() => {
						setCurPage(1)
					}} type="button" value='首页' />
					<input onClick={() => {
						if(curPage > 1) {
							setCurPage(--curPage);
						}
					}} type="button" value='上一页' />
					<input onClick={() => {
						if(curPage < maxPage) {
							setCurPage(++curPage)
						}
					}} type="button" value='下一页' />
					<input onClick={() => {
						setCurPage(maxPage)
					}} type="button" value='尾页' />
				</div>
			</div>
		);
    }
}