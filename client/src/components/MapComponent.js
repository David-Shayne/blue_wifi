import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

export class MapComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        };
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null,
            });
        }
    };
    render() {
        const containerStyle = {
            position: "relative",
            width: "100%",
            height: "100%",
        };

        return (
            <Map
                containerStyle={containerStyle}
                google={this.props.google}
                zoom={16}
                style={{ width: "100%", height: "40vh" }}
                initialCenter={{ lat: -34.130612, lng: 18.379166 }}
                mapTypeId="SATELITE"
                onClick={this.onMapClicked}
            >
                <Marker
                    position={{ lat: -34.130448, lng: 18.379829 }}
                    desc="Voucher Shop"
                    name="4 Way Stop"
                    onClick={this.onMarkerClick}
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                >
                    <div>
                        <h3 style={{ color: "black", marginBottom: "0" }}>
                            {this.state.selectedPlace.name}
                        </h3>
                        <p>Official Voucher Reseller</p>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAnIQHmVqaPCdBNPkV-FZ_wR2sCiu1CUfc",
})(MapComponent);
