import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import { Login, AppLayout, Dashboard, User, UserCreate, UserDetail, Vaccine, VaccineDetail, Place, PlaceDetail, QRScan } from './pages'

// const cache = new InMemoryCache({
//     typePolicies: {
//       Query: {
//         fields: {
//           user: {
//             merge(existing, incoming) {
//               return incoming;
//             },
//           },
//           place: {
//             merge(existing, incoming) {
//               return incoming;
//             },
//           },
//           vaccineLot: {
//             merge(existing, incoming) {
//               return incoming;
//             },
//           },
//           vaccine: {
//             merge(existing, incoming) {
//               return incoming;
//             },
//           }
//         },
//       },
//     },
//   });
  
//   const client = new ApolloClient({
//     uri: 'http://localhost:5000/graphql',
//     cache,
//   });
function App() {
    return (
        // <ApolloProvider>
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<Login/>}/>
                <Route path="" element={<AppLayout/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path='/user' element={<User/>}/>
                    <Route path='/user/create' element={<UserCreate/>}/>
                    <Route path='/user/:id' element={<UserDetail/>}/>
                    <Route path='/vaccine' element={<Vaccine/>}/>
                    <Route path='/vaccine/:id' element={<VaccineDetail/>}/>
                    <Route path='/place' element={<Place/>}/>
                    <Route path='/place/:id' element={<PlaceDetail/>}/>
                    <Route path='/qr-scan' element={<QRScan/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        // </ApolloProvider> 
    )
}

export default App
