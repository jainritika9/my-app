import {Container, Grid, Menu, Segment,Image,Divider,Input, Icon} from 'semantic-ui-react';
import React from 'react';
class Main extends React.Component{
    render(){
        return(
            <Container fluid style={{backgroundColor:'teal'}}>
                <Menu attached='bottom' inverted>
                    <Menu.Item>UNSTOCK</Menu.Item>
                    <Menu.Item position='right'>Udaipur (pin) (+)</Menu.Item>
                    <Menu.Item>LOGIN</Menu.Item>               
                </Menu>
                <Segment style={{minHeight:580,padding:50}} secondary >
                    <Grid>
                        <Grid.Row  style={{height:270}}>
                            <Grid.Column width={3}>
                                <Image src='https://5.imimg.com/data5/NH/OK/MY-2455568/electronic-ic-500x500.jpg' style={{height:200,width:250,border:'solid 1px'}}/>
                            </Grid.Column>
                            <Grid.Column width={7} style={{fontSize:15,padding:2,fontFamily:'serif'}}>
                                <pre style={{ fontFamily:'serif',margin:1,fontSize:18}}>Schiender Electric Part# ITM-022-01<br/></pre>
                                <pre style={{margin:1}}><b>Specifications</b>  220 V H<br/>
                                <b>Category</b>        Switch Gear<br/>
                                <b>Location:</b>       Sector-11, Udaipur<br/>
                                <b>Quality:</b>        Good</pre>
                
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                        <span><Icon name='dropdown'  />Queries</span></Grid.Row>
                    </Grid>
                    <Divider/>
                    <Grid overflow="auto">
                        <Grid.Row sticky>
                     <Image src="https://www.washingtonfirechiefs.com/Portals/20/EasyDNNnews/3593/img-blank-profile-picture-973460_1280.png" style={{width:50,margin:2,padding:2,height:50}}/><Input placeholder='Message' style={{width:1200,padding:5}} />
                     </Grid.Row>
                     <Grid.Row>
                     <Image src="https://www.washingtonfirechiefs.com/Portals/20/EasyDNNnews/3593/img-blank-profile-picture-973460_1280.png" style={{width:50,margin:2,padding:2,height:50}}/>
                     <pre style={{fontFamily:"serif",margin:2,fontSize:12}}><b style={{color:"purple"}}>Ketan Mistry</b> <b>ago 9 months</b><br/>
                     Required Quality Schiender electric reused of switch gear once <br/>
                     <span style={{fontSize:12}}><Icon name='dropdown'  />1 reply</span></pre>
                     </Grid.Row>
                     <Grid.Row style={{marginLeft:60}}>
                     <Image src="https://www.washingtonfirechiefs.com/Portals/20/EasyDNNnews/3593/img-blank-profile-picture-973460_1280.png" style={{width:50,margin:2,padding:2,height:50}}/>
                     <pre style={{fontFamily:"serif",margin:2,fontSize:12}}><b style={{color:"purple"}}>Bhupesh Paliwal</b> <b>ago 9 months</b><br/>
                     Required Quality Schiender electric reused of switch gear once <br/>
                     <span style={{fontSize:12}}><Icon name='dropdown'  />1 reply</span></pre>
                     </Grid.Row>
                     <Grid.Row>
                     <Image src="https://www.washingtonfirechiefs.com/Portals/20/EasyDNNnews/3593/img-blank-profile-picture-973460_1280.png" style={{width:50,margin:2,padding:2,height:50}}/>
                     <pre style={{fontFamily:"serif",margin:2,fontSize:12}}><b style={{color:"purple"}}>Ketan Mistry</b> <b>ago 10 months</b><br/>
                     Required Quality Schiender electric reused of switch gear once <br/>
                     <span style={{fontSize:12}}><Icon name='dropdown'  />5 reply</span></pre>
                     </Grid.Row>
                    </Grid>
                </Segment>
            </Container>
        )
    }
}
export default Main;