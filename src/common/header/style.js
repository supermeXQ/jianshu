import styled from 'styled-components';
import logoPic from '../static/logo.png';
import diamond from '../static/demond.png';
export const HeaderWrapper = styled.div`

       
       height:56px;
       background-color: #fff;
       position:fixed;
       top: 0;
       left: 0;
       right: 0;
    //  overflow: hidden;
       box-shadow: 0 2px 10px rgba(0,0,0,.05);
    z-index: 100;

`
export const Nav = styled.div`
      position:relative;
       height:56px;
       min-width: 1200px;
       max-width: 1440px;
       margin: 0 auto;

`
export const Logo = styled.a.attrs({
    href: '/'
})`
      
      float:left;
      display:inine-block;
       width:100px;
       height:56px;
    //    left:0;
    //    top:0;
       background:url(${logoPic});
       background-size:contain;

`
export const NavItem = styled.div

    `
   
      height:56px;
      line-height:56px;
      margin:0  15px;
      &.left{
        float: left
      }
      &.right{
        float: right;
        color:#969696
      }
      &.active{
          color:#ea6f5a
      }

`
export const SearchWrapper = styled.div
    `
 float:left;
 position:relative;
 .slide-enter{
    transition:all .2s ease-in;
     width:200px;
    
 }
 .slide-entered{
   width:300px;
   
}
.slide-exit{
    transition:all .2s ease-out;
}
.slide-exit-active{
    width:200px;
}


 .iconfont{
     position:absolute;
       width:30px;
       line-height:30px;
       text-align:center;
       right:22px;
       bottom:3px;
    //    background:green;
       border-radius:15px;
    &.focused{
        background:#777;
        color:fff;
    }
 }
`
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})

    `
    float:left;
     width:200px;
     height:38px;
     margin:0  20px;
     padding:0 40px 0 20px;
     box-sizing:border-box;
     border:none;
     margin-top:9px;
     outline:none;
     border-radius:19px;
     background:#eee;
     font-size:14px;
     &.focused{
         width:300px;
     }
     &::placeholder{
         color:#999
     }
     

`
export const Addition = styled.div

    `

    float:right;
     width:100px;
     height:40px;
     line-height:40px
     text-align:center;
     margin:8px  20px;
     border-radius: 20px;
     font-size: 15px;
    &.wirte{
        color: #fff;
    background-color: #ea6f5a;
    }
     &.reg{
        border: 1px solid rgba(236,97,73,.7);
        color: #ea6f5a;
    background-color: transparent;
}
     }
     


`

export const Diamond = styled.a.attrs({
    href: '/'
})
    `
      
      float:right;
      display:inine-block;
       width:56.81px;
       height:25px;
       margin:14.5px  20px;
       background:url(${diamond}) no-repeat;
       background-size:contain;
       
`