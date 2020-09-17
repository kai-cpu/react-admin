import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './types/App.scss';

// 引用组件
import Home from './views/Home';
import About from './views/About';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div class="test">
        <h1>asdawd</h1>
        <HashRouter>    {/* HashRouter 使用URL中的hash(#)部分去创建路由，访问地址就会变成 这种：http://localhost:3000/#/about */}
          <Switch>      {/* <Route>在Switch中路径相同的情况下，匹配第一个，避免重复匹配*/}
            <Route exact component={Home}  path="/"/> {/* exact 精准匹配 */}
            <Route component={About} path="/about"/>
          </Switch>
        </HashRouter>
      </div>
      )
    }
  }
export default App;
