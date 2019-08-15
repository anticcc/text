
import React, { Component } from 'react'

export default class Ha extends Component {
    state = {
        picutres: [{
            id: '1',
            name: 'foo',
            url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
        },
        {
            id: '2',
            name: 'foo',
            url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
        },
        {
            id: '3',
            name: 'foo',
            url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
        }],
        datalist: []

    }
    render() {
        return (
            <div>
                <input type="checkbox" id='lzc' onClick={
                    (ev) => {
                        if (ev.target.checked) {
                            this.setState({
                                datalist: this.state.picutres
                            }, () => {
                                document.querySelectorAll('.lzc_once').forEach(el => {
                                    el.checked = true
                                })
                            })

                        } else {
                            document.querySelectorAll('.lzc_once').forEach(el => {
                                el.checked = false
                            })
                            this.setState({
                                datalist: []
                            })
                        }
                    }
                } />已选中
                {
                    this.state.datalist.length
                }
                个图片
                <div style={{
                    display: 'flex',
                }}>
                    {
                        this.state.picutres.map((item, index) => {
                            return <div key={item.id} style={{
                                display: 'flex',
                            }} >
                                <input type="checkbox" className='lzc_once' key={item.id + 'inp'} onClick={(ev) => {


                                    if (this.state.datalist.indexOf(item) > -1) {
                                        var a = [...this.state.datalist]
                                        a.splice(this.state.datalist.indexOf(item), 1)
                                        this.setState({
                                            datalist: a
                                        })
                                        if (this.state.datalist.length === 3) {
                                            document.querySelector('#lzc').checked = true
                                        } else {
                                            document.querySelector('#lzc').checked = false
                                        }

                                        return
                                    }


                                    this.setState({
                                        datalist: [...this.state.datalist, item]
                                    }, () => {
                                        if (this.state.datalist.length === 3) {
                                            document.querySelector('#lzc').checked = true
                                        } else {
                                            document.querySelector('#lzc').checked = false
                                        }
                                    })

                                }} />
                                <img src={item.url} key={item.id + 'img'} />
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }

}

