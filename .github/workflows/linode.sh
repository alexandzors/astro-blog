#/bin/bash

while getopts ":a:d" option; do
case $option in
a)
linode-cli firewalls rules-update $LINODE_FW_ID \
    --inbound '[{"action":"ACCEPT", "protocol": "TCP", "ports": "22", "addresses": {"ipv4": ["'$HOME_IP'", "'$PUB_IP'"]}, "label": "accept-inbound-SSH"}, {"action":"ACCEPT", "protocol": "TCP", "ports": "80", "addresses": {"ipv4": ["0.0.0.0/0"], "ipv6": ["::/0"]}, "label": "accept-inbound-HTTP"}, {"action":"ACCEPT", "protocol": "TCP", "ports": "443", "addresses": {"ipv4": ["0.0.0.0/0"], "ipv6": ["::/0"]}, "label": "accept-inbound-HTTPS"}]'
;;
d)
linode-cli firewalls rules-update $LINODE_FW_ID \
    --inbound '[{"action":"ACCEPT", "protocol": "TCP", "ports": "22", "addresses": {"ipv4": ["'$HOME_IP'"]}, "label": "accept-inbound-SSH"}, {"action":"ACCEPT", "protocol": "TCP", "ports": "80", "addresses": {"ipv4": ["0.0.0.0/0"], "ipv6": ["::/0"]}, "label": "accept-inbound-HTTP"}, {"action":"ACCEPT", "protocol": "TCP", "ports": "443", "addresses": {"ipv4": ["0.0.0.0/0"], "ipv6": ["::/0"]}, "label": "accept-inbound-HTTPS"}]'
;;
esac
done