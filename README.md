This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### 受控组件与非受控组件

受控组件和非受控组件是针对表单组件而言，最大的区别在于受控组件需要同时设置value和onChange事件，这样用户的输入才会显示；非受控组件只需要设置defaultValue，即可显示用户的输入。
受控组件的安全性更高一点，必须要在onChange回调事件里手动绑定值；非受控组件的使用更自由一点。
    <div>
        <InputNumber value={value} onChange={e=>{
          setValue(e.target.value)
        }}/>
        <InputNumber defaultValue={value} onChange={e=>{}}/>
    </div>
    
组件的具体实现(path: 'controlComponent/src/movi/inputNumber'/)

    class inputNumber extends Component{
        constructor(props){
            super(props);
            this.state = {
                innerValue: ''
            }
        }

        get isControl(){
            return 'value' in this.props
        }

        get value(){
            if(this.isControl){
                return this.props.value
            }else{
                return this.state.innerValue
            }
        }

        render() {

            return (
                <input
                    value = {this.value}
                    onChange={e => {
                        if(!this.isControl){
                            this.setState({
                                innerValue: e.target.value
                            })
                        }
                        this.props.onChange(e)
                    }}
                ></input>
            );
        }

        componentDidMount(){
            this.setState({
                innerValue : this.props.defaultValue
            })
        }
    }
    export default inputNumber;    